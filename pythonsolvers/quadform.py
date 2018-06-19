import math
def quadform(a,b,c):
    global answer1, answer2
    step1 = math.sqrt((b**2) - (4*(a*c)))
    step1 = float(step1)
    step2 = (-1*b) + step1
    step2 = float(step2)
    step3 = (-1*b) - step1
    step3 = float(step3)
    answer1 = float(step2/(2*a))
    answer2 = float(step3/(2*a))
a = float(input("Enter 'a' (coefficient of x^2)"))
b = float(input("Enter 'b' (coefficient of x)"))
c = float(input("Enter 'c' (number at end)"))
quadform(a,b,c)
print(answer1, answer2)