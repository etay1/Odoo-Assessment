x = input("test string: ")

if x.startswith("\"") and x.endswith("\"") or x.startswith("\'") and x.endswith("\'"):
    print("matches")
else:
    print("does not match")
