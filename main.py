import eel 
import matplotlib.pyplot as plt
# from io import BytesIO
import matplotlib
matplotlib.use("Agg") 
from dotenv import load_dotenv
import os
import openai
import tempfile

# os.makedirs('./templates/', exist_ok=True)

eel.init('templates')
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
temp_plot_file = None

@eel.expose
def generate_figure(prompt):
    openai.api_key = api_key
    # API request to generate the code.
    response = openai.Completion.create(
        engine="text-davinci-002",  
        prompt=prompt,
        max_tokens=1000,  
        n=1,  
        stop=None,  
        temperature=0.7 
    )

    generated_code = response.choices[0].text.strip()
    fig, ax = plt.subplots()
    exec(generated_code)
    fig.savefig('templates/images/image1.png')
    print(generated_code)
    return generated_code 
    
eel.start('index.html', size=(1200, 600))
# make a scatter plot for x vs y where x is [5, 7, 8, 7, 2, 17, 2, 9, 4, 11, 12, 9, 6] and  y  is [99, 86, 87, 88, 100, 86, 103, 87, 94, 78, 77, 85, 86]


