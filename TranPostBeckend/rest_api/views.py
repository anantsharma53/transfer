from django.shortcuts import render
from django.views import View
from .serializers import *
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest, Http404
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from django.core.paginator import Paginator
import json
import random
import copy
from .models import *
# from .data import Employee
# Create your views here.
Employee_list=[]
NEWEmployee_list = []
# post=""
class SigneUpView(APIView):
    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            refresh=RefreshToken.for_user(user)
            return JsonResponse({
                'refresh':str(refresh),
                'access':str(refresh.access_token)
            },
            status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.error,status.HTTP_400_BAD_REQUEST,safe=False)
       
class SignInView(APIView):
    def post(self,request):
        serializer=LoginSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.validated_data
            refresh=RefreshToken.for_user(user)
            user_data = {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'name':user.name,
                'mobile_number':user.mobile_number,
                'is_superuser':user.is_superuser
                # Add other user details you want to include
            }
            return JsonResponse({
                'user': user_data,
                'refresh':str(refresh),
                'access':str(refresh.access_token)
            },
            status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.error,status.HTTP_400_BAD_REQUEST,safe=False)

# class GetUserViews(APIView):
#     permission_classes = [IsAuthenticated]    
#     def get(self, request):
#         paginator = PageNumberPagination()
#         paginator.page_size = 2
#         users = User.objects.all()
#         result_page = paginator.paginate_queryset(users, request)
#         user_serialized = UserSerializer(result_page, many=True).data
#         return paginator.get_paginated_response({
#             'results': user_serialized,
#             'num_pages': paginator.page.paginator.num_pages,
#         })
    
# class GetUserViews(APIView):
#     permission_classes=[IsAuthenticated]    
#     def get(self, request):
#         paginator = PageNumberPagination()
#         paginator.page_size = 2
#         users = User.objects.all()
#         result_page = paginator.paginate_queryset(users, request)
#         user_serialized = UserSerializer(result_page, many=True).data
#         return paginator.get_paginated_response(user_serialized)
    
    # as per classes
class GetUserViews(APIView):
    permission_classes=[IsAuthenticated]    
    def get(self, request):
        page_number =request.GET.get('page',1)
        users=User.objects.all().order_by("id")
        paginator = Paginator(users, 2)
        page = paginator.get_page(page_number)
        users_on_page = page.object_list
        user_serialized = UserSerializer(users_on_page, many=True).data
        return JsonResponse({
        'results': user_serialized, 
        'num_pages': paginator.num_pages, 
        "total_user": users.count()})

    
class GetEmployeeView(APIView):   
    def get(self, request):
        Employee=employee.objects.all()
        employee_serialized = EmployeeSerializer(Employee, many=True).data
        return JsonResponse(employee_serialized, safe=False, status=200)
    
class EmployeeEntryView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        data=json.loads(request.body)
        data["user"]=request.user.id
        serializer=EmployeeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message':'entry done'}, status=status.HTTP_201_CREATED)
        return JsonResponse({'message':'entry not done'},status=status.HTTP_400_BAD_REQUEST,safe=False)
    
class DesiganationEntryView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        data=json.loads(request.body)
        data["user"]=request.user.id
        serializer=DesiSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message':'entry done'}, status=status.HTTP_201_CREATED)
        return JsonResponse({'message':'entry not done'},status=status.HTTP_400_BAD_REQUEST,safe=False)
    
class GetPostView(APIView): 
    permission_classes=[IsAuthenticated]  
    def get(self, request):
        Post=designations.objects.all()
        post_serialized = DesiSerializer(Post, many=True).data
        return JsonResponse(post_serialized, safe=False, status=200)
        
class OfficeEntryView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        data=json.loads(request.body)
        data["user"]=request.user.id
        serializer=OfficeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message':'entry done'}, status=status.HTTP_201_CREATED)
        return JsonResponse({'message':'entry not done'},status=status.HTTP_401_UNAUTHORIZED,safe=False)
    
# class GetOfficeView(APIView): 
#     permission_classes=[IsAuthenticated]  
#     def get(self, request):
#         Office=officename.objects.all()
#         office_serialized = OfficeSerializer(Office, many=True).data
#         return JsonResponse(office_serialized, safe=False, status=200)
class GetOfficeView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        search_query = request.data.get('search_query', '')  # Get the search query from the POST data
        offices = officename.objects.filter(Office_name__icontains=search_query)  # Use icontain to search
        office_serialized = OfficeSerializer(offices, many=True).data
        return JsonResponse(office_serialized, safe=False, status=200)


class GetEmployeeByPostView(APIView):
    def get(self, request):
        query = request.GET.get('query')
        # print(query)
        Employee_list = employee.objects.filter(Post=query)
        employee_serialized = EmployeeSerializer(Employee_list, many=True).data
        return JsonResponse(employee_serialized, safe=False, status=200)
        # for val in employee:
        #     if 'Panchyat Secretary' == query:
        #         Employee_list.append(val)
        # employee_serialized = EmployeeSerializer(
        #     Employee_list, many=True).data
        # if (Employee_list):
        #     return JsonResponse(employee_serialized, safe=False, status=200)
        # else:
        #     query = ""
        #     return HttpResponseBadRequest("Error", status=401)

# class GetEmployeeByPostView(View):
#     def get(self, request):
#         query = request.GET.get('query')
#         # print(query)
#         Employee_list = []
#         for val in Employee:
#             if 'Panchyat Secretary' == query:
#                 Employee_list.append(val)
#         employee_serialized = EmployeeSerializer(
#             Employee_list, many=True).data
#         if (Employee_list):
#             return JsonResponse(employee_serialized, safe=False, status=200)
#         else:
#             query = ""
#             return HttpResponseBadRequest("Error", status=401)

# class GetNewOfficeWithBlock(APIView):
#     def get(self, request):
#         query = request.GET.get('query')
#         print(query)
#         Employee_list = employee.objects.filter(Post=query)
#         # del NEWEmployee_list[:]
#         for val in Employee_list:
#             val["Alloted_Block"] =""
#             NEWEmployee_list.append(val)
#         employee_serialized = NEWEmployeeSerializer(NEWEmployee_list, many=True).data 
#         print(employee_serialized)      
#         return JsonResponse(employee_serialized, safe=False, status=200) 
class GetNewOfficeWithBlock(APIView):
    def get(self, request):
        query = request.GET.get('query')
        print(query)
        Employee_list = employee.objects.filter(Post=query)
        
        del NEWEmployee_list[:]  # Create a new list to hold modified employee data
        
        for val in Employee_list:
            new_employee_data = val.__dict__.copy()  # Create a copy of the employee data
            new_employee_data["Alloted_Block"] = ""  # Add the new field
            NEWEmployee_list.append(new_employee_data)  # Append modified data to the new list
        
        employee_serialized = NEWEmployeeSerializer(NEWEmployee_list, many=True).data 
        print(employee_serialized)      
        return JsonResponse(employee_serialized, safe=False, status=200)
             
class CleanArray(View):
     def get(self,request):
          query=request.GET.get('query')
          if query=="clean":  
            del NEWEmployee_list[:]
            # print(NEWEmployee_list)
          return JsonResponse(NEWEmployee_list,safe=False, status=200)

class GetNewOffice(APIView):
    def get(self, request):
        post = request.GET.get('query')
        print(post)
        for val in NEWEmployee_list:
            val["Alloted_Block"] = ""
        # print(NEWEmployee_list)
        FinalEmployee_list = []
        if post == post:
            district_requirements = {
                "Karmatar": 6,
                "Narayanpur": 8,
                "Jamtara": 6,
                "Nala": 5,
                "Kundahit": 3,
                "Fatehpur": 3,                            
            }
        for officename, required_count in district_requirements.items():
            employees_assigned = 0
            print(officename)
            available_employees = [val for val in NEWEmployee_list if val["Alloted_Block"] == ""]
            random.shuffle(available_employees)  # Shuffle the list of available employees
            for employee in available_employees:
                if (
                    employee["Home_Block"] != officename and
                    employee["Current_Posting_Block"] != officename and
                    employee["First_Previous_Block"] != officename
                ):
                    employee["Alloted_Block"] = officename
                    FinalEmployee_list.append(employee)
                    employees_assigned += 1
                if employees_assigned >= required_count:
                    break

        employee_serialized = NEWEmployeeSerializer(FinalEmployee_list, many=True).data
        return JsonResponse(employee_serialized, safe=False, status=200)