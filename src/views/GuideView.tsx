import { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import { RouteParams } from '../routes';
import { SupportedLocale } from '../locale';

const modules = ['installation', 'getting-started', 'customize'];

function renderGuide(locale: SupportedLocale, page: string) {
  if (page === 'installation') {
    return <Installation locale={locale} />;
  }
  if (page === 'getting-started') {
    return <GettingStarted locale={locale} />;
  }
  if (page === 'customize') {
    return <Customize locale={locale} />;
  }
  return null;
}

class GuideView extends PureComponent<RouteComponentProps<RouteParams>> {
  render() {
    const { match } = this.props;
    const page = match?.params?.name ?? modules[0];

    const locale = getLocaleType(this.props);

    return (
      <div className="page page-guide">
        <div className="sidebar">
          <div className="sidebar-cate">
            <h2>{localeGet(locale, 'guide', 'guide')}</h2>
            <ul className="menu">
              {modules.map((entry, index) => (
                <li key={`item-${index}`}>
                  <Link to={`/${locale}/guide/${entry}`} className={entry === page ? 'active' : ''}>
                    {localeGet(locale, 'guide', entry)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content">{renderGuide(locale, page)}</div>
      </div>
    );
  }
}

export default withRouter(GuideView);
