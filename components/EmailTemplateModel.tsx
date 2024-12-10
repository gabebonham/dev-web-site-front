interface EmailTemplateProps {
	date: Date;
	obs: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	date,

	obs,
}) => (
	<div>
		<h1>{date.toDateString()}</h1>
		<p>{obs}</p>
	</div>
);
