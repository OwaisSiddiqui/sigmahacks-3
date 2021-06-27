from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'pk',
            'username',
            'password'
        ]
        extra_kwargs = {
            'username': {'required': True},
            'password': {'required': True}
        }