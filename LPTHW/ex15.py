# adds a library
from sys import argv
# packs script and filename to argv
script, filename = argv
# creates a variable "txt" and sets it to the filename
txt = open(filename)
#prints the filename variable
print "Here's your file %r:" % filename
# prints content of txt variable
print txt.read()
# prints a message
print "Type the filename again:"
# promts the user for the filename and stors in new variable file_again
file_again = raw_input("> ")
# new variable txt_again is set to open file name in variable file_again
txt_again = open(file_again)
#prints content of variable txt_again
print txt_again.read()
