# creates variable car and sets it to 100
cars = 100
# creates variable space_in_a_car and sets it to 4
space_in_a_car = 4.0
# creates variable drivers and sets it to 30
drivers = 30
# creates variable passengers and sets it to 90
passengers = 90
# creates variable cars_not_driven and sets it to the answer of var cars minus drivers
cars_not_driven = cars - drivers
# creates variable cars_driven and sets it to the value of variable drivers
cars_driven = drivers
# creates variable carpool_capacity and sets it to the product of var cars_driven and space_in_a_car
carpool_capacity = cars_driven * space_in_a_car
# creates variable average_passengers_per_car and sets it to the result of var passengers divided by var cars_driven
average_passengers_per_car = passengers / cars_driven


print "There are", cars, "cars available."
print "There are only", drivers, "drivers available."
print "There will be", cars_not_driven, "empty cars today."
print "We can transport", carpool_capacity, "people today."
print "We have", passengers, "to carpool today."
print "We need to put about", average_passengers_per_car, "in each car."
