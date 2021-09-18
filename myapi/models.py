from django.db import models

# Create your models here.
class User(models.Model):
    email = models.CharField(max_length=50)

    def __str__(self):
        return self.email

class Message(models.Model):
    user = models.ForeignKey(User,
  on_delete=models.CASCADE)
    recipient = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=200)