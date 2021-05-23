/*
 * Copyright (c) 2018-2021 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

import React from 'react';
import WarningBanner from './WarningBanner';
import WebSocketBanner from './WebSocketBanner';

type Props = {};

type State = {
  bannerAlerts: React.ReactElement[];
};

export class BannerAlert extends React.PureComponent<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      bannerAlerts: [
        <WebSocketBanner key='WebSocketBannerAlert'></WebSocketBanner>,
        <WarningBanner key='WarningBanner'></WarningBanner>
      ]
    };
  }

  render() {
    const banners = this.state.bannerAlerts;
    return (
      <div>
        {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          banners.map(banner => <div key={banner.key!}>{banner}</div>)
        }
      </div>
    );
  }
}
