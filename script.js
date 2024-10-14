function rollDice() {
    const x1 = Math.floor(Math.random() * 6) + 1;
    const x2 = Math.floor(Math.random() * 6) + 1;
    const x3 = Math.floor(Math.random() * 6) + 1;

    console.log(`xx1: ${x1}`);
    console.log(`xx2: ${x2}`);
    console.log(`xx3: ${x3}`);

    const total = x1 + x2 + x3;
    const result = total <= 10 ? 'XIU' : 'TAI';

    // Lấy dự đoán của người dùng
    const userPrediction = document.getElementById('prediction').value;
    const isMatch = userPrediction === result ? 'Trùng khớp!' : 'Không trùng khớp.';

    console.log(`Ket qua: ${result}`);
    document.getElementById('result').innerText = `
        xx1: ${x1}
        xx2: ${x2}
        xx3: ${x3}
        Ket qua: ${result}
        Dự đoán của bạn: ${userPrediction}
        Kết quả: ${isMatch}
    `;

    // Disable the button for 30 seconds
    document.getElementById('rollButton').disabled = true;
    setTimeout(() => {
        document.getElementById('rollButton').disabled = false;
    }, 30000); // 30 giây
}
