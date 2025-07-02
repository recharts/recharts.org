import { PureComponent } from 'react';
import { Link } from 'react-router';
import { Installation, GettingStarted, Customize } from '../components/GuideView';
import { getLocaleType, localeGet } from '../utils/LocaleUtils.ts';
import { SupportedLocale } from '../locale';
import { RouteComponentProps, withRouter } from '../routes/withRouter.tsx';

const allGuides = ['installation', 'getting-started', 'customize'];

function Guide({ locale, page }: { locale: SupportedLocale; page: string }) {
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

class GuideView extends PureComponent<RouteComponentProps> {
  render() {
    const { params } = this.props;
    const page = params?.name ?? allGuides[0];

    const locale = getLocaleType(this.props);

    return (
      <div className="page page-guide">
        <div className="sidebar">
          <div className="sidebar-cate">
            <h2>{localeGet(locale, 'guide', 'guide')}</h2>
            <ul className="menu">
              {allGuides.map((entry) => (
                <li key={entry}>
                  <Link to={`/${locale}/guide/${entry}`} className={entry === page ? 'active' : ''}>
                    {localeGet(locale, 'guide', entry)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content">
          <Guide locale={locale} page={page} />
        </div>
      </div>
    );
  }
}

export default withRouter(GuideView);
