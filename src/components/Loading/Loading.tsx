import { JSX } from "react/jsx-runtime"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const Loading = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => {
  return (
    <div className="card-wrapper">
      {Array.from({ length: 6 }, (_, index) => (
        <ContentLoader
          speed={1.2}
          width={285}
          height={460}
          viewBox="0 0 285 460"
          backgroundColor="#f3f3f378"
          foregroundColor="#ffc685"
          key={index}
          {...props}
        >
          <rect x="0" y="235" rx="9" ry="9" width="278" height="28" />
          <circle cx="137" cy="113" r="113" />
          <rect x="0" y="293" rx="8" ry="8" width="278" height="60" />
          <rect x="0" y="375" rx="9" ry="9" width="53" height="19" />
          <rect x="153" y="362" rx="9" ry="9" width="125" height="43" />
        </ContentLoader>
      ))}
    </div>
  )
}
export default Loading
