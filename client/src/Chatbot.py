from openai import OpenAI 

client = OpenAI(api_key="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")

# Example: Request to the API (Adjust as needed)
response = client.Completion.create(
  engine="text-davinci-003",
  prompt="Translate the following English text to French: 'Hello, world!'",
  temperature=0.7,
  max_tokens=60,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
)

print(response.choices[0].text.strip())
