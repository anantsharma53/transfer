from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser
# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self,username,password,**extra_fields):
        if not username:
            raise ValueError("Username sholud be provided")
        user=self.model(username=username,**extra_fields)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self,username,password,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)
        return self.create_user(username,password,**extra_fields)
    
class User(AbstractBaseUser):
    id=models.AutoField(primary_key=True)
    # first_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=30,unique=True)
    email= models.EmailField(max_length=100,unique=True)
    mobile_number = models.CharField(max_length=15)
    password=models.CharField(max_length=100)

    USERNAME_FIELD='username'
    objects=UserManager()

class employee(models.Model):
    Employee_Name= models.CharField(max_length=100)
    Date_of_Birth= models.CharField(max_length=50)
    Home_Block= models.CharField(max_length=50)
    Current_Posting_Block=models.CharField(max_length=50)
    Current_Posting_Year= models.CharField(max_length=50)
    First_Previous_Block=models.CharField(max_length=50)
   
class newemployee(models.Model):
    Employee_Name= models.CharField(max_length=100)
    Date_of_Birth= models.CharField(max_length=50)
    Home_Block= models.CharField(max_length=50)
    Current_Posting_Block=models.CharField(max_length=50)
    Current_Posting_Year= models.CharField(max_length=50)
    First_Previous_Block=models.CharField(max_length=50)
    Alloted_Block=models.CharField(max_length=50)
   




   