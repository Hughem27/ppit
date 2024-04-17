# import openai

# def create_chat():
#     client = openai.OpenAI()

#     # Start with an initial system message to define the AI's role
#     messages = [
#         {"role": "system", "content": "You are a medical advisor and companion."},
#     ]

#     # Main loop for ongoing conversation
#     while True:
#         # Get user input
#         user_message = input("You: ")
        
#         # Check for exit condition
#         if user_message.lower() == 'exit':
#             print("Exiting conversation.")
#             break
        
#         # Append the user message to the conversation history
#         messages.append({"role": "user", "content": user_message})

#         # Send the updated conversation to the API
#         response = client.chat.completions.create(
#             model="gpt-3.5-turbo",
#             messages=messages
#         )

#         # Print the latest response from the model
#         print("AI:", response.choices[0].message.content)

# if __name__ == "__main__":
#     create_chat()


#######################################################################################################################

# above code is my original working code, the below code is refactored to be passed as a function to the server.py file

import openai

# Initialize the OpenAI client
openai.api_key = 'OPENAI_API_KEY'  # Securely manage this

def get_response(user_message, history):
    # Append the user message to the conversation history
    history.append({"role": "user", "content": user_message})

    # Send the updated conversation to the API
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=history
    )

    # Extract the latest response from the model
    ai_response = response['choices'][0]['message']['content']

    # Optionally, update the history with the AI's response
    history.append({"role": "ai", "content": ai_response})

    return ai_response, history

def respond(user_message, history=[]):
    return get_response(user_message, history)
