import React, { useEffect } from 'react';

const ContactForm = () => {
//   const { error, successMessage, createContact } = useCreateContact();

  	useEffect(() => {
		const fields = {
			NAME: 'John',
			SECOND_NAME: 'Doe',
			LAST_NAME: 'Smith',
			OPENED: 'Y',
			ASSIGNED_BY_ID: 1,
			TYPE_ID: 'CLIENT',
			SOURCE_ID: 'SELF',
			PHONE: [{ VALUE: '555888', VALUE_TYPE: 'WORK' }],
		};
	
		const current = new Date();
		const nextMonth = new Date();
		nextMonth.setMonth(current.getMonth() + 1);
	
		const date2str = (d) => {
		return (
			d.getFullYear() +
			'-' +
			paddatepart(1 + d.getMonth()) +
			'-' +
			paddatepart(d.getDate()) +
			'T' +
			paddatepart(d.getHours()) +
			':' +
			paddatepart(d.getMinutes()) +
			':' +
			paddatepart(d.getSeconds()) +
			'+03:00'
		);
		};
	
		const paddatepart = (part) => {
		return part >= 10 ? part.toString() : '0' + part.toString();
		};
	
		BX24.callMethod(
		'crm.deal.add',
		{
			fields: {
			TITLE: 'aaaa',
			TYPE_ID: 'GOODS',
			STAGE_ID: 'NEW',
			COMPANY_ID: 3,
			CONTACT_ID: 3,
			OPENED: 'Y',
			ASSIGNED_BY_ID: 1,
			PROBABILITY: 30,
			CURRENCY_ID: 'USD',
			OPPORTUNITY: 5000,
			CATEGORY_ID: 5,
			BEGINDATE: date2str(current),
			CLOSEDATE: date2str(nextMonth),
			},
			params: { 'REGISTER_SONET_EVENT': 'Y' },
		},
		function (result) {
			if (result.error()) {
				console.error(result.error());
			} else {
				console.info('Создана сделка с ID ' + result.data());
			}
		}
	);
  }, []);

  return (
      <div></div>
  );
};

export default ContactForm;