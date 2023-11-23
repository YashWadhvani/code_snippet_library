string=input("Enter a string:")
word=input("Enter the word to find:")

words=string.split()
count=0

for w in words:
    if w==word:
        count+=1

print(count)
