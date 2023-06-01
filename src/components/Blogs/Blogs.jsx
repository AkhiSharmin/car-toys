import useTitle from "../../Hook/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-16">
      <div className="border-4 border-b-green-400 p-8 shadow-2xl">
        <h2 className="text-xl font-bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p>
          Access Token: An access token is a piece of documentation that
          verifies a client (person or program) has been granted authorization
          to access a certain set of resources on a server. A successful
          authentication is frequently followed by produced by an authentication
          service (like OAuth or JWT) and used to subsequent API requests to
          approve them. Access tokens frequently have an expiration date and a
          short duration. They grant restricted access capabilities and are
          typically associated with certain scopes or permissions. Refresh
          Token: A refresh token, which has a long lifespan, may be used to
          obtain a new access token after one expires. Along with the access
          token, it is distributed at the beginning of the first authentication
          process. Typically, refresh tokens are provided.
        </p>
      </div>
      <div className="border-4 border-b-green-400 p-8 shadow-2xl">
        <h2 className="text-xl font-bold">
          2. Compare SQL and NoSQL databases?
        </h2>
        <p>
          The two types of database management systems, SQL (Structured Query
          Language) and NoSQL (Not Only SQL), differ in their data structures,
          querying capabilities, scalability, and use cases. A comparison
          between SQL and NoSQL databases is shown below: Modeling Data: Using a
          structured and predetermined schema, SQL databases employ rows and
          columns to create tables out of data. With the help of main and
          foreign key restrictions, they protect data integrity and facilitate
          links between tables. NoSQL: NoSQL databases adopt a flexible or
          schema-less approach, enabling the usage of dynamic and unstructured
          data models. Depending on the exact NoSQL database type, they store
          data in a variety of forms such as key-value pairs, documents,
          wide-column, or graph structures. Language for Querying: SQL: To query
          and manage data, SQL databases employ the standardized SQL language.
          SQL..
        </p>
      </div>
      <div className="border-4 border-b-green-400 p-8 shadow-2xl">
        <h2 className="text-xl font-bold">
          3. What is express js? What is Nest JS?
        </h2>
        <p>
          Although both Express.js and Nest.js are Node.js web application
          frameworks, their approaches, architectures, and functionality vary.
          An overview of each framework is given below: Express.js is a
          straightforward and unpretentious web framework for Node.js. It offers
          a straightforward and adaptable API for creating web apps and APIs.
          Express.js focuses on offering a minimal and lightweight basis, giving
          developers precise control over the organization and functionality of
          their applications. To manage requests and answers, it supports
          routing, middleware, and HTTP utility methods. Express.js is renowned
          for being straightforward, quick, and widely used in the community.
          Nest.js: Nest.js is an opinionated, progressive framework based on
          Express.js. It adopts an Angular-inspired modular and scalable design
          that encourages the usage of TypeScript and decorators. Nest.js
        </p>
      </div>
      <div className="border-4 border-b-green-400 p-8 shadow-2xl">
        <h2 className="text-xl font-bold">
          4. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p>
          The aggregate function in MongoDB is used to carry out sophisticated
          data aggregation operations on collections. To provide aggregated
          results, you can analyze and change the data in several steps. The
          aggregate technique employs a pipeline approach, allowing you to
          specify a number of steps for data manipulation and analysis. An
          overview of MongoDBs aggregate function is given below: Pipeline
          Stages: The aggregate methods parameter is a list of stages. Each step
          stands for a certain operation to be performed on the data. Typical
          phases include: Filters pages using the supplied criteria using
          $match. By using a specified field, $group groups documents and
          conducts aggregations within each group. Sorts documents using the
          parameters you provide with $sort. Projects just specified fields from
          documents using $project...
        </p>
      </div>
    </div>
  );
};

export default Blogs;
