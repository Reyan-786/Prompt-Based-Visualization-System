const visualizationButton = document.getElementById("visualizeButton");
const inputBox = document.getElementById("promptInput");
const vizWindow = document.getElementById('visualizationWindow');

visualizationButton.addEventListener('click', async function () {
    const prompt = "Generate the matplotlib code for the query - " + inputBox.value;
    alert("prompt passed is" + prompt);
    const generated_code = await eel.generate_figure(prompt)();
    const plot_path = "images/image1.png";
    alert("plot path : " + plot_path);
    console.log("Successfully Generated Figure for the given prompt");
    inputBox.innerHTML = '';

    const img = document.createElement('img');
    img.src = plot_path;
    img.style.float = 'left';

    const code_window = document.getElementById("generated-code");
    code_window.textContent = generated_code;
    document.getElementById('viz-window').appendChild(img);
});

const clipBoard = new ClipBoardJS('#copyButton');
clipBoard.on('success',function(e){
    e.clearSelection();
    alert('Code copied to clipboard!');
})

