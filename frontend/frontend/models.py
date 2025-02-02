from django.db import models

class Location(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.FloatField(48.8584)
    longitude = models.FloatField(2.2945)

    def __str__(self):
        return self.name