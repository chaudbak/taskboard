# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-04-13 20:00
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='accomplished_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='accomplished_tasks', to=settings.AUTH_USER_MODEL),
        ),
    ]
