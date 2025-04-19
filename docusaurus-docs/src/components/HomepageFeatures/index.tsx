import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "UMA without touching crypto",
    imageUrl: "img/without-crypto.png",
    description: (
      <>
        UMA as a Service enables your users to send and receive payments
        globally without needing to touch crypto or worry about the underlying
        payment networks.
      </>
    ),
  },
  {
    title: "Human-readable Payment Addresses",
    imageUrl: "img/human-readable.png",
    description: (
      <>
        Assign personalized UMA addresses to your users in the format of{" "}
        <code>$username@domain.com</code>, making money addresses as intuitive
        and easy to remember as email addresses.
      </>
    ),
  },
  {
    title: "Seamless API Integration",
    imageUrl: "img/seamless-api.png",
    description: (
      <>
        Integrate universal money addresses into your application with our REST
        API, webhook notifications, and comprehensive security features.
      </>
    ),
  },
];

function Feature({ title, imageUrl, description }: FeatureItem) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgUrl} className={styles.featureImage} role="img" alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
