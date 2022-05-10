import React from 'react';
import ContentLoader from 'react-content-loader';

function ContentWaiting() {
  return (
    <ContentLoader
      speed={5}
      width={340}
      height={460}
      viewBox="0 0 340 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="426" y="496" rx="3" ry="3" width="67" height="11" />
      <rect x="502" y="496" rx="3" ry="3" width="140" height="11" />
      <rect x="553" y="544" rx="3" ry="3" width="53" height="11" />
      <rect x="613" y="544" rx="3" ry="3" width="72" height="11" />
      <rect x="444" y="544" rx="3" ry="3" width="100" height="11" />
      <rect x="426" y="567" rx="3" ry="3" width="37" height="11" />
      <rect x="444" y="519" rx="3" ry="3" width="140" height="11" />
      <rect x="591" y="519" rx="3" ry="3" width="173" height="11" />
      <circle cx="583" cy="535" r="7" />
      <circle cx="593" cy="483" r="140" />
      <rect x="-1" y="19" rx="0" ry="0" width="260" height="254" />
      <rect x="119" y="303" rx="0" ry="0" width="28" height="0" />
      <rect x="61" y="287" rx="10" ry="10" width="120" height="27" />
      <rect x="555" y="531" rx="0" ry="0" width="50" height="2" />
      <rect x="NaN" y="NaN" rx="0" ry="0" width="NaN" height="NaN" />
      <rect x="0" y="326" rx="0" ry="0" width="260" height="68" />
    </ContentLoader>
  );
}

export default ContentWaiting;
