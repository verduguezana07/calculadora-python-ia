# ==============================================================
# CALCULADORA PYTHON - 4 OPERAÇÕES + PORCENTAGEM
# Refatorada no Desafio de Engenharia de Software
# ==============================================================

def calculadora():
    print("=" * 45)
    print("      CALCULADORA PYTHON INTERATIVA")
    print("=" * 45)

    while True:
        print("\nOperações disponíveis:")
        print("1. Adição (+)")
        print("2. Subtração (-)")
        print("3. Multiplicação (*)")
        print("4. Divisão (/)")
        print("5. Porcentagem (%) -> [NOVA FUNCIONALIDADE]")
        print("6. Potenciação (**)")
        print("0. Sair do programa")

        opcao = input("\nEscolha uma opção (0-6): ").strip()

        if opcao == "0":
            print("\nEncerrando a calculadora. Até logo!")
            break

        if opcao not in ["1", "2", "3", "4", "5", "6"]:
            print("❌ Opção inválida! Digite um número de 0 a 6.")
            continue

        try:
            # Para porcentagem, personalizamos a mensagem para ficar mais intuitivo
            if opcao == "5":
                total = float(input("Digite o valor base (ex: 200): "))
                taxa = float(input("Digite a porcentagem desejada (ex: 15 para 15%): "))
            else:
                num1 = float(input("Digite o primeiro número: "))
                num2 = float(input("Digite o segundo número: "))
        except ValueError:
            print("❌ Erro: Por favor digite apenas valores numéricos válidos!")
            continue

        # Execução das Operações Matemáticas
        if opcao == "1":
            resultado = num1 + num2
            print(f"\n✅ Adição: {num1} + {num2} = {resultado}")

        elif opcao == "2":
            resultado = num1 - num2
            print(f"\n✅ Subtração: {num1} - {num2} = {resultado}")

        elif opcao == "3":
            resultado = num1 * num2
            print(f"\n✅ Multiplicação: {num1} * {num2} = {resultado}")

        elif opcao == "4":
            if num2 == 0:
                print("❌ Erro Matemático: Impossível dividir por zero!")
            else:
                resultado = num1 / num2
                print(f"\n✅ Divisão: {num1} / {num2} = {resultado}")

        # NOVA FUNCIONALIDADE IMPLEMENTADA:
        elif opcao == "5":
            # Fórmula: (taxa / 100) * total
            resultado = (taxa / 100.0) * total
            print(f"\n✅ Porcentagem: {taxa}% de {total} = {resultado}")
            print(f"   (Valor com acréscimo: {total + resultado} | Com desconto: {total - resultado})")

        elif opcao == "6":
            resultado = num1 ** num2
            print(f"\n✅ Potenciação: {num1} ** {num2} = {resultado}")

# Executa o programa
if __name__ == "__main__":
    calculadora()
