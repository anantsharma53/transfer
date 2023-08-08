from django.urls import path
from .import views
from .views import *
from django.views.decorators.csrf import csrf_exempt

urlpatterns =[ 
    path('userlist/', GetUserViews.as_view(), name='user-list'),
    path('employee/', GetEmployeeView.as_view(), name='employee-list'),
    path('employee/search/', GetEmployeeByPostView.as_view(), name='employee-list'),
    path('employee/search/new', csrf_exempt(GetNewOfficeWithBlock.as_view()), name='New Office with block'),
    path('employee/newoffice/', GetNewOffice.as_view(), name='New Office block and office'),
    path('employee/clean/', CleanArray.as_view(), name='employee-list'),
    path('employee/user/signup/',csrf_exempt(SigneUpView.as_view()),name='user-signup'),
    path('employee/user/login/',csrf_exempt(SignInView.as_view()),name='user-login'),
    path('employee/emp/',csrf_exempt(EmployeeEntryView.as_view()),name='Employee-Entry-View'),
    path('employee/desi/',csrf_exempt(DesiganationEntryView.as_view()),name='Employee-Entry-View'),
    path('posts/', GetPostView.as_view(), name='post-list'),
    path('employee/office/',csrf_exempt(OfficeEntryView.as_view()),name='Employee-office-Entry-View'),
    path('office/', csrf_exempt(GetOfficeView.as_view()), name='office-list'),
    path('employee/block/',csrf_exempt(BlockEntryView.as_view()),name='Employee-office-Entry-View'),
    path('block/', csrf_exempt(GetBlockView.as_view()), name='office-list'),
]