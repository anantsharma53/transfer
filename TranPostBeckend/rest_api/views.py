from django.shortcuts import render
from django.views import View
from .serializers import *
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest, Http404
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
import json
import random
import copy
from .data import Employee
# Create your views here.
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
            return JsonResponse({
                'refresh':str(refresh),
                'access':str(refresh.access_token)
            },
            status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.error,status.HTTP_400_BAD_REQUEST,safe=False)
class GetEmployeeView(View):
    def get(self, request):
        employee_serialized = EmployeeSerializer(Employee, many=True).data
        return JsonResponse(employee_serialized, safe=False, status=200)


class GetEmployeeByPostView(View):
    def get(self, request):
        query = request.GET.get('query')
        # print(query)
        Employee_list = []
        for val in Employee:
            if 'Panchyat Secretary' == query:
                Employee_list.append(val)
        employee_serialized = EmployeeSerializer(
            Employee_list, many=True).data
        if (Employee_list):
            return JsonResponse(employee_serialized, safe=False, status=200)
        else:
            query = ""
            return HttpResponseBadRequest("Error", status=401)

class GetNewOfficeWithBlock(View):
    def get(self, request):
        query = request.GET.get('query')
        print(query)
        del NEWEmployee_list[:]
        for val in Employee:
            val["Alloted_Block"] =""
            NEWEmployee_list.append(val)
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

class GetNewOffice(View):
    def get(self, request):
        post = request.GET.get('query')
        print(post)
        for val in NEWEmployee_list:
            val["Alloted_Block"] = ""
        # print(NEWEmployee_list)
        FinalEmployee_list = []
        if post == "Panchyat Secretary":
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