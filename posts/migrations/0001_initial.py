# Generated by Django 3.2.6 on 2021-08-11 16:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150)),
                ('writer', models.CharField(max_length=100)),
                ('writerid', models.CharField(max_length=100)),
                ('pub_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('body', models.TextField(default='')),
                ('track_title', models.CharField(max_length=500)),
                ('track_artist', models.CharField(max_length=500)),
                ('track_album_cover', models.CharField(max_length=500)),
                ('track_audio', models.CharField(max_length=500)),
            ],
        ),
    ]
