import csv
import pandas
import numpy as np

#Data Frame with the fields as in the first line of the file:
#EMBEDIFRAMECODE  THUMB  TITLE  TAG  CATEGORY  PORNSTAR  DURATION
frame = pandas.io.parsers.read_csv('youporn.csv',sep='|')

#Mask for all entries that have a pornstar named
with_pornstars_mask = pandas.notnull(frame.PORNSTAR)

#embed codes and pornstars of those entries
embed_codes = np.array(frame.EMBEDIFRAMECODE[with_pornstars_mask])
pornstars = np.array(frame.PORNSTAR[with_pornstars_mask])

print embed_codes
