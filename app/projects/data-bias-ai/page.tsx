import BiasPipeline from "@/app/components/BiasPipeline";

export const metadata = {
  title: "Data Bias in AI",
};

export default function DataBiasAIPage() {
  return (
    <article className="space-y-10">

      {/* Header */}
      <header>
        <h1 className="text-2xl font-medium tracking-tight">
          Data Bias in AI
        </h1>
        <p className="text-blue-300">
          Why technical systems inherit social inequality
        </p>
      </header>

      {/* Meta */}
      <section className="text-xs text-gray-500">
        <p><strong>Type:</strong> Conceptual / Analytical Project</p>
        <p><strong>Focus:</strong> Data, AI, IT Systems</p>
        <p><strong>Context:</strong> HR systems, data-driven decision-making</p>
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-lg font-medium mb-4">Project Overview</h2>
        <p>
          This mini-essay examines why bias systematically emerges in data-driven systems and artificial intelligence. 
          Drawing on interdisciplinary literature from social science, machine learning, and applied domains such as HR analytics, 
          it argues that algorithmic bias is not primarily a technical flaw but the result of structural conditions that precede, shape, and constrain data collection, model development, and system deployment.
        </p>
      </section>

      {/* Core Question */}
      <section>
        <h2 className="text-lg font-medium mb-4">Core Question</h2>
        <p>
          Why do data-driven systems reproduce inequality, even when designed to be objective?
        </p>
      </section>

      <p className="mb-4">
        To illustrate how bias enters and propagates through data-driven systems,
         the following pipeline visualizes bias as a socio-technical process rather
         than a purely technical error. It shows that bias is not introduced at a
         single point, but accumulates across multiple stages of system design and use.
      </p>

    <p className="mb-4">
          Starting from existing social structures, unequal representation and power
         relations shape what is measured and recorded as data. These datasets are then
         used to train machine learning models, which necessarily simplify complex
        realities and optimize for predefined performance metrics. When deployed in
         real-world systems, such as AI-driven hiring tools, these models inform or
         automate decisions that directly affect individuals.
    </p>

    <p className="mb-6 ">
       The pipeline emphasizes that algorithmic bias cannot be understood or addressed
         at the model level alone. Instead, it emerges from the interaction between
         society, data, technical design choices, and institutional contexts of use.
    </p>


      <section>
         <h2 className="text-lg font-medium mb-10 pt-6">
            Bias Propagation Pipeline
         </h2>
         <BiasPipeline />
      </section>

      {/* Essay Sections */}
      <section>
        <h2 className="text-lg font-medium mb-4">
          Problem Statement: The Myth of Objective AI
        </h2>
        <p>A common misconception is that data objectively represents reality. In fact, research shows that data is always socially shaped.
           Perez highlights systematic data gaps regarding women, which stem from historical power relations and institutional decisions about what is measured.
         Sperber et al.(2023) similarly shows that organizational data often reflects the experiences of dominant groups, while others remain statistically invisible. 
         As a result, data-driven systems appear objective, even though they are based on partial representations of reality.</p>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">
          Bias Exists Before Data
        </h2>
        <p>Bias does not originate in algorithms but exists before data collection begins. 
           Historical discrimination, unequal institutional access, and social norms shape who appears in datasets and how (cf. Hanna et al.(2025); Sperber(2023)). As a result, data often encodes past injustices as statistical patterns, for example through over-policing or underemployment of certain groups.
           This historical bias persists even when sensitive attributes are removed, because it remains embedded in correlated variables.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">
          From Society to Datasets
        </h2>
        <p>The transition from social reality to datasets introduces additional bias mechanisms. 
            Common data-level biases include unrepresentative sampling, systematic missing data, biased labels, and proxy variables that indirectly encode protected characteristics (Hanna et al.; Sperber).
            Cinca et al. (2025) show that even experienced ML practitioners often underestimate how strongly social inequalities shape datasets,
            frequently attributing bias to models while acknowledging that it already emerges at the data level.</p>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">
          From Datasets to Models
        </h2>
        <p>When biased datasets are used to train machine learning models, bias is not only preserved but often amplified.
           Cinca et al. (2025)show that practitioners struggle to operationalize fairness because models necessarily simplify complex social processes
           into a limited set of variables. This oversimplification leads to trade-offs between accuracy and fairness that cannot be resolved purely 
           through technical optimization 3733838. Moreover, Hanna et al. (2025) emphasize that optimizing for performance metrics (such as accuracy or F1-score)
           can systematically disadvantage minority groups, especially when group sizes are uneven or when error costs differ across populations 
        </p>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">
          Bias in HR and Decision Systems
        </h2>
        <p>The effects of data bias are especially visible in applied systems such as AI-driven HR analytics. 
            Sony et al. (2025)show that recruitment algorithms trained on historical hiring data often reproduce gender, racial,
             age-based, and disability-related discrimination. 
            These systems are commonly used in high-stakes contexts like hiring or promotion, yet operate as opaque black boxes, 
            which limits accountability and makes decisions difficult to challenge.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">
          Why This Matters for IT Practitioners
        </h2>
        <p>Across all reviewed studies, one conclusion is consistent: bias cannot be fully eliminated through technical means alone.
            Cinca et al. (2025)show that even after training and exposure to fairness tools, practitioners could not fully remove bias from 
            real-world datasets. Instead, the most meaningful progress occurred when participants reflected on assumptions, data origins, and societal context.
            This shifts responsibility from “fixing the model” to responsible system design, which includes:
            critical data selection, awareness of social context,interdisciplinary collaboration, and institutional accountability.
        </p>
      </section>

      {/* Takeaways */}
      <section>
        <h2 className="text-lg font-medium mb-4 text-blue-300">Key Takeaways</h2>
        <ul className="list-disc ml-6">
          <li>Bias is embedded before model training.</li>
          <li>Data reflects structual and historical inequalities.</li>
          <li>Technical fairness cannot resolve social injustices</li>
          <li>Awareness and reflection are essential for IT practitioners.</li>
        </ul>
      </section>

      {/* Sources */}
      <section>
        <h2 className="text-lg font-medium mb-4">Sources</h2>
        <ul className="list-disc ml-6 text-sm pb-15">
          <li>Perez, C. C. (2019). Invisible women: Data bias in a world designed for men</li>
          <li>Caton, S., et al. (2024). Fairness in machine learning: A survey</li>
          <li>Hanna, A., et al. (2025). Ethical and bias considerations in artificial intelligence/machine learning.</li>
          <li>Sperber, S., et al. (2023). Gender data gap and its impact on management science: Reflections from a European perspective</li>
         <li>Cinca, C., et al. (2025). Practitioners and bias in machine learning: A study.Cinca, C., et al. (2025). Practitioners and bias in machine learning: A study</li>
          <li>Sony, M., et al. (2025). Bias in AI-driven HRM systems: Investigating discrimination risks embedded in AI recruitment tools and HR analytics</li>
        </ul>
      </section>

    </article>
  );
}
