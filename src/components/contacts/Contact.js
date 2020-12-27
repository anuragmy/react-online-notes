/* eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowMore from 'react-show-more';
import moment from 'moment'
import { Card } from 'semantic-ui-react'
import { Typography } from 'antd';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';
import DeleteModal from './DeleteModal'


const Contact = (props) => {

	const { Paragraph } = Typography;

	const [modal, setModal] = React.useState(false);

	const open = () => setModal(true);
	const close = () => setModal(false);



	const { id, title, description } = props.contact;
	const date = moment().format('Do MMM YYYY')

	return (
		// <div className="card card-body mb-3">
		<React.Fragment>
			<Card raised style={{ width: '95%' }}>
				<Card.Content>
					<i
						className="fas fa-times"
						style={{ cursor: 'pointer', float: 'right', color: 'red', fontSize: 20 }}
						onClick={open}
					/>
					<Link to={`notes/edit/${id}`}>
						<i
							className="fas fa-pencil-alt"
							style={{
								cursor: 'pointer',
								float: 'right',
								color: 'black',
								fontSize: 20,
								marginRight: '1rem'
							}}
						/>
					</Link>
					<Card.Header>{title}</Card.Header>
					<Card.Meta>{date}</Card.Meta>
					<Card.Description>
						<ShowMore
							lines={1}
							more='...Show more'
							less='...Show less'
							anchorClass=''
						>
							{description}
						</ShowMore>
					</Card.Description>
				</Card.Content>
			</Card>
			{ modal && <DeleteModal close={close} />}
		</React.Fragment >

		// </div>
	);


}

export default connect(null, { deleteContact })(Contact);
