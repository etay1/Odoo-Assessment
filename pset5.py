x = input("test string: ")

if x.startswith("\"") and x.endswith("\"") or x.startswith("\'") and x.endswith("\'"):
    print("match")
else:
    print("does not match")
