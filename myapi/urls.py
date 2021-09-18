from django.conf.urls import url
from . import views

urlpatterns = [
    url('messages', views.message_list),
    url('user', views.UserViewSet.as_view()),

]