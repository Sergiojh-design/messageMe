# Generated by Django 3.2.7 on 2021-09-16 01:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='messages',
            new_name='Message',
        ),
        migrations.RenameModel(
            old_name='Users',
            new_name='User',
        ),
    ]
