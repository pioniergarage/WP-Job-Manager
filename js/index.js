/**
 * External dependencies
 */
import page from 'page';

/**
 * Internal dependencies
 */
// import { navigation, sites, siteSelection } from 'my-sites/controller';
// import { renderTab } from './app/controller';
import { Tabs } from './constants';
// import JobListings from './components/settings/job-listings';
// import JobSubmission from './components/settings/job-submission';
// import Pages from './components/settings/pages';
// import installActionHandlers from './state/data-layer';

// function initExtension() {
// 	installActionHandlers();
// }

window.bootApp = () => {
	const jobSubmissionSlug = _.get( Tabs, 'JOB_SUBMISSION.slug', '' );
	const pagesSlug = _.get( Tabs, 'PAGES.slug', '' );

	// page( '/extensions/wp-job-manager', sites );
	page( '/extensions/wp-job-manager/:site', siteSelection, navigation, renderTab( JobListings ) );
	page( `/extensions/wp-job-manager/${ jobSubmissionSlug }/:site`, siteSelection, navigation,
		renderTab( JobSubmission, jobSubmissionSlug ) );
	page( `/extensions/wp-job-manager/${ pagesSlug }/:site`, siteSelection, navigation,
	 	renderTab( Pages, pagesSlug ) );
}

// initExtension();