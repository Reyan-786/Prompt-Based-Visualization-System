const visualizationButton = document.getElementById("visualizeButton");
const inputBox = document.getElementById("promptInput");
const vizWindow = document.getElementById('visualizationWindow');

visualizationButton.addEventListener('click',async function () {
    const prompt = "Generate the matplotlib code for the query - " + inputBox.value;
    alert("prompt passed is" + prompt);
    const plot_path = await eel.generate_figure(prompt)();
    alert("plot path : "+plot_path);
    console.log("Successfully Generated Figure for the given prompt");
    inputBox.innerHTML = '';

    const img = document.createElement('img');
    img.src = plot_path;
    document.getElementById('viz-window').appendChild(img);
});
// api-key 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