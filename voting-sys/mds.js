// Example function to interact with Minima
async function sendTransaction(data) {
	const response = await fetch('http://127.0.0.1:9005/api/sendtransaction', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
	const result = await response.json()
	return result
}

async function createPollOnBlockchain(pollName) {
	const transactionData = {
		data: pollName,
		type: 'createPoll',
	}
	const result = await sendTransaction(transactionData)
	console.log(result)
}
