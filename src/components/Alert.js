import React from 'react';
import Alert from 'emerald-ui/lib/Alert';

import './styles/Alert/Alert.css';

class OwnAlert extends React.Component {
	render() {
		return (
			<div className="alert grid-x margin-auto">
				<Alert dismissible>
					<p style={{ padding: '10px 0', margin: 0 }}>
						This is an info message
					</p>
				</Alert>
			</div>
		);
	}
}

export default OwnAlert;
