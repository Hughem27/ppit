import openai

openai.api_key = "OPENAI_AP_KEY"

def chat(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.0-turbo",
        messages=[{"role": "user", "content": prompt}] 
    )
    
    return response.choices[0].message.content.strip()

if __name__ == "__main__":
   while True:
      user_input = input("You: ")
      if user_input.lower() in ["exit", "quit", "bye"]:
          break
          
      response = chat(user_input)
      print("Chatbot: ", response)