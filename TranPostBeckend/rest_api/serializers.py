from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate
class EmployeeSerializer(serializers.ModelSerializer):
    class  Meta:
        model=employee
        fields ='__all__'
        
class NEWEmployeeSerializer(serializers.ModelSerializer):
    class  Meta:
        model=newemployee
        fields ='__all__'

class DesiSerializer(serializers.ModelSerializer):
    class Meta:
        model=designations
        fields ='__all__'
class OfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model=officename
        fields ='__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields="__all__"
    def create(self,validated_data):
        user=User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            name=validated_data['name'],
            # last_name=validated_data['last_name'],
            email=validated_data['email'],
            mobile_number=validated_data['mobile_number'],           
        )
        return user
class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()
    def validate(self,data):
        user=authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Cred")


