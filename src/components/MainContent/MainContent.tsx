import React from 'react';

import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
import { Container } from '../Container/Container';

import './main-content.css';

interface MainContentProps {
  /**
   * The content to display inside this region.
   */
  children?: React.ReactNode;
  /**
   * The container width.
   */
  containerWidth?: 'narrow' | 'standard' | 'wide';
  /**
   * The page title.
   */
  pageTitle?: string;
  /**
   * The current page pathname.
   */
  pathname?: string;
  /**
   * Show breadcrumb trail on this page.
   */
  showBreadcrumb?: boolean;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * MainContent UI component
 */
export const MainContent = ({
  children,
  containerWidth = 'standard',
  pageTitle,
  pathname,
  showBreadcrumb,
  className,
  ...props
}: MainContentProps) => {
  // Set up classes.
  const baseClass = 'mm-main-content';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {showBreadcrumb && (
        <Container width={containerWidth}>
          <Breadcrumb pathname={pathname} />
        </Container>
      )}
      <Container width={containerWidth}>
        <h1 className='mm-page-title'>{pageTitle}</h1>
      </Container>

      <Container className='mm-main-content' width={containerWidth}>
        <main>{children}</main>
      </Container>
    </div>
  );
};
