from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser
# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self,username,password,**extra_fields):
        if not username:
            raise ValueError("Username sholud be provided")
        extra_fields.setdefault('is_staff',False)
        extra_fields.setdefault('is_superuser',False)
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
    is_staff=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)

    
    USERNAME_FIELD='username'
    objects=UserManager()
class designations(models.Model):
    Post = models.CharField(max_length=100, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='postuser')

class officename(models.Model):
    Office_name=models.CharField(max_length=100, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='officeuser')

class employee(models.Model):
    Employee_Name= models.CharField(max_length=100)
    Date_of_Birth= models.CharField(max_length=50)
    Home_Block= models.CharField(max_length=50)
    Current_Posting_Block=models.CharField(max_length=50)
    Current_Posting_Year= models.CharField(max_length=50)
    First_Previous_Block=models.CharField(max_length=50)
    Post=models.CharField(max_length=100)
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='user')
    
class block(models.Model):
    block_Name= models.CharField(max_length=100,unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blockuser')



class newemployee(models.Model):
    Employee_Name= models.CharField(max_length=100)
    Date_of_Birth= models.CharField(max_length=50)
    Home_Block= models.CharField(max_length=50)
    Current_Posting_Block=models.CharField(max_length=50)
    Current_Posting_Year= models.CharField(max_length=50)
    First_Previous_Block=models.CharField(max_length=50)
    Alloted_Block=models.CharField(max_length=50)
   




   