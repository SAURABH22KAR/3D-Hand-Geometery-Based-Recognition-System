import openai

openai.api_key = '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'

def chat_with_gpt(prompt):
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-0613",  # Use the specific model version
        prompt=prompt,
        max_tokens=150,
        temperature=0.7,
        n=1,
    )
    return response.choices[0].text.strip()

def main():
    print("Welcome to MindfulMentor! Type 'exit' to end the conversation.")
    
    while True:
        user_input = input("You: ")
        
        if user_input.lower() == 'exit':
            print("MindfulMentor: Goodbye! Take care of yourself.")
            break
        
        prompt = f"You: {user_input}\nMindfulMentor:"
        response = chat_with_gpt(prompt)
        
        print(f"MindfulMentor: {response}")

if __name__ == "__main__":
    main()
