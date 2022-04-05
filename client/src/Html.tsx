import React from "react";

const Html: React.FC<{ title: string; assets?: Record<string, any> }> = ({
  assets = {},
  children,
  title,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </head>
      <body
        style={{
          fontFamily: ` -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
        }}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default Html;
