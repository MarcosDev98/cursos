print("Hola, cuantos años tenés?")
ok = False
edad = int(input("Ingrese su edad: "))
while ok == False:

    if edad < 1:
        print("Debe tener al menos 1 año de edad.")
        ok = False
    elif edad > 100 and edad < 110:

        print("¿Realmente tiene "+str(edad)+" años?")
        validarEdad = str(input("y/n"))
        if validarEdad == "y" or validarEdad == "Y":
            print("Aceptado.")
            ok = True
        elif validarEdad == "n" or validarEdad == "N":
            edad = int(input("Ingrese su edad correctamente: "))
        else:
            validarEdad = str(input("Por favor, solo ingrese Y o N."))
    elif edad > 110:
        edad = int(input("Ingrese su edad correctamente: "))
    elif edad > 1 and edad < 50:
        print("Regrese el proximo año.")
        ok = True
    else:
        print("Aceptado")
        ok = True
    if ok == False:
        edad = int(input("Ingrese su edad: "))
