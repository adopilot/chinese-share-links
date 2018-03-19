import Sharing from 'discourse/lib/sharing';

export default {
  name: 'it-mjerenje',

  initialize() {
    Sharing.addSource({
      id: 'utroseniSati',
      faIcon: 'fa-check',
      generateUrl(link, title) {
        return "http://erp.rgt.ba/ipPref/Task?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
      },
      shouldOpenInPopup: false,
      popupHeight: 480,
      popupWidth: 1120
    });
	 Sharing.addSource({
      id: 'kasaProblem',
      faIcon: 'fa-cart-plus',
      generateUrl(link, title) {
        return "http://core.rgt.ba/ProblemiKasa/Create?url=" + encodeURIComponent(link);
      },
      shouldOpenInPopup: true,
      popupHeight: 600,
      popupWidth: 800
    });
  }
}
