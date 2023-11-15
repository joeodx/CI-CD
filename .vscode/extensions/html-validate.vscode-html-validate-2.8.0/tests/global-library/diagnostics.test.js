const path = require("path");
const { expect } = require("chai");
const vscode = require("vscode");

async function activate(docUri) {
	const ext = vscode.extensions.getExtension("html-validate.vscode-html-validate");
	await ext.activate();
	try {
		const doc = await vscode.workspace.openTextDocument(docUri);
		await vscode.window.showTextDocument(doc);
		await sleep(10000); // Wait for server activation
	} catch (e) {
		/* eslint-disable-next-line no-console -- for debugging */
		console.error(e);
	}
}

async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDocUri(filename) {
	const filePath = path.resolve(__dirname, filename);
	return vscode.Uri.file(filePath);
}

function toRange(sLine, sChar, eLine, eChar) {
	const start = new vscode.Position(sLine, sChar);
	const end = new vscode.Position(eLine, eChar);
	return new vscode.Range(start, end);
}

async function testDiagnostics(docUri, expectedDiagnostics) {
	await activate(docUri);
	const actualDiagnostics = vscode.languages.getDiagnostics(docUri);
	expect(actualDiagnostics).to.eql(expectedDiagnostics);
}

describe("vscode-html-validate", () => {
	it("should find errors in test.html", async () => {
		const docUri = getDocUri("test.html");
		await testDiagnostics(docUri, [
			{
				data: undefined,
				hasDiagnosticCode: false,
				source: "html-validate",
				message: '<button> is missing required "type" attribute',
				range: toRange(0, 1, 0, 7),
				severity: vscode.DiagnosticSeverity.Error,
				code: "element-required-attributes",
			},
		]);
	});

	it("should not find errors in test.txt", async () => {
		const docUri = getDocUri("test.txt");
		await testDiagnostics(docUri, []);
	});
});
