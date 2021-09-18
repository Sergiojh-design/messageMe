from django.shortcuts import render
from django.db.models import Prefetch

# Create your views here
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import DestroyAPIView

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .serializers import UserSerializer
from .serializers import MessageSerializer
from .models import User
from .models import Message
from rest_framework.decorators import api_view

@api_view(['GET', 'POST', 'DELETE'])
def message_list(request):
  if request.method == 'GET':
    email = request.query_params["email"]
    userId = User.objects.get(email=email).id

    messagesRecieved = Message.objects.filter(recipient=email)
    messagesSent = Message.objects.filter(user=userId)
    # users = User.objects.filter(id = Message.objects.filter(recipient=username).user)
    messagesRecievedUser = User.objects.raw('SELECT * FROM myapi_user, myapi_message WHERE myapi_message.recipient = %s AND myapi_user.id = myapi_message.user_id', [email])

    serializerMessageRecievedUser = UserSerializer(messagesRecievedUser, many=True)
    serializerMessageSent = MessageSerializer(messagesSent, many=True)
    serializermessagesRecieved = MessageSerializer(messagesRecieved, many=True)

    return JsonResponse({'messagesSent':serializerMessageSent.data, 'messagesRecieved': serializermessagesRecieved.data, 'messagesRecievedUser': serializerMessageRecievedUser.data})

  elif request.method == 'POST':
    message_data = request.data
    print(message_data)
    # user = request.query_params["username"]
    # username = User.objects.get(id=message_data["user"])
    email = User.objects.get(email = request.query_params["email"])
    # user = int(User.objects.get(user_name=username).id)

    new_message = Message.objects.create(user=email, recipient=message_data["recipient"], title=message_data["title"], body=message_data["body"])

    new_message.save()

    serializer = MessageSerializer(new_message)

    return JsonResponse(serializer.data)

  elif request.method == 'DELETE':
    message_data = request.data
    # messageId = request.query_params["messageId"]
    message = Message.objects.get(id=message_data["id"])
    message.delete()
    return JsonResponse({'message' :"Message was deleted"})

class UserViewSet(APIView):

  serializer_class = UserSerializer

  def get_queryset(self):
    users = User.objects.all()
    return users

  def get(self, request, *args, **kwargs):
    users = self.get_queryset()
    serializer = UserSerializer(users, many=True)

    return Response(serializer.data)

  def post(self, request, *args, **kwargs):
    user_data = request.data
    print(user_data)

    new_user = User.objects.create(email=user_data["email"])

    new_user.save()

    serializer = UserSerializer(new_user)

    return Response(serializer.data)
