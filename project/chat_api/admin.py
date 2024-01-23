from django.contrib import admin

from chat_api.models import Message, Chat

admin.site.register(Message)
admin.site.register(Chat)