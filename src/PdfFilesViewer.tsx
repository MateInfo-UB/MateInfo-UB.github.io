import { Card, Tabs, Tab, TabsExpander, H4 } from "@blueprintjs/core";
import { editii } from "./data";
import { usePathQuery } from "./helpers";
import { useState } from "react";

const FileViewer = ({ pdfFile }: { pdfFile: string }) => {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				paddingLeft: "10px",
			}}
		>
			<Card
				elevation={4}
				style={{
					padding: 0,
					height: "100%",
					width: "100%",
					backgroundColor: "rgba(255, 255, 255, 0.3)",
					backdropFilter: "blur(3px)",
					WebkitBackdropFilter: "blur(3px)",
				}}
			>
				<embed
					type="application/pdf"
					style={{
						height: "100%",
						width: "100%",
						border: "none",
					}}
					src={pdfFile}
				/>
			</Card>
		</div>
	);
};

interface PdfFilesViewerProps {
	etapa: "I" | "II";
}

const PdfFilesViewer = ({ etapa }: PdfFilesViewerProps) => {
	const { getPathQuery, setPathQuery } = usePathQuery();
	const [activeTab, setActiveTabInternal] = useState(getPathQuery("activeTab", "0"));
	const setActiveTab = (newTab: string) => {
		setActiveTabInternal(newTab);
		setPathQuery("activeTab", newTab);
	};

	// pentru fiecare editie care sunt fisierele pdf
	const fisiere: { editie: string; pdf: string }[] = editii.flatMap((editie) => {
		let pdfs = etapa === "I" ? editie.pdf_etapa_1_link : editie.pdf_etapa_2_link;
		if (typeof pdfs === "string") pdfs = [pdfs];
		else if (typeof pdfs === "undefined") pdfs = [];
		if (pdfs.length === 1) return { editie: editie.name, pdf: pdfs[0] };
		return pdfs.map((pdf, index) => {
			return { editie: editie.name + ` - Problema ${index + 1}`, pdf: pdf };
		});
	});

	// Sort by edition
	fisiere.sort((a, b) => a.editie.localeCompare(b.editie)).reverse();

	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				padding: "10px",
			}}
		>
			<div
				style={{
					height: "100%",
					minWidth: "15vw",
				}}
			>
				<Card
					elevation={3}
					style={{
						width: "100%",
						textAlign: "center",
						height: "100%",
						backgroundColor: "rgba(255, 255, 255, 0.3)",
						backdropFilter: "blur(3px)",
						WebkitBackdropFilter: "blur(3px)",
					}}
				>
					<H4>Ediție</H4>
					<Tabs vertical animate={true} onChange={setActiveTab} selectedTabId={activeTab}>
						{fisiere.map((fisier, index) => (
							<Tab key={index} id={index.toString()} title={fisier.editie} style={{ width: "100%" }} />
						))}
						<TabsExpander />
					</Tabs>
				</Card>
			</div>
			<div
				style={{
					flex: 1,
					height: "100%",
				}}
			>
				<FileViewer pdfFile={fisiere[parseInt(activeTab)].pdf} />
			</div>
		</div>
	);
};

export { PdfFilesViewer };
export type { PdfFilesViewerProps };
