// components/DownloadLink.tsx

import Link from 'next/link';

interface DownloadLinkProps {
    fileName: string;
    description: string;
}

const DownloadLink: React.FC<DownloadLinkProps> = ({ fileName, description }) => {
    return (
        <div>
            <p>{description}</p>
            <Link href={`/${fileName}`} target="_blank" rel="noopener noreferrer" locale={false} download>
                Download {fileName}
            </Link>
        </div>
    );
};

export default DownloadLink;


{/* <div>
<p>Click the link below to download the PDF file:</p>
<Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" locale={false} download>
  Download PDF
</Link>
</div> */}
