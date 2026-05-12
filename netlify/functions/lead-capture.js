export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const leadPayload = {
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      full_name: body.full_name || body.name || "",
      email: body.email || "",
      phone: body.phone || "",
      company_name: body.company_name || body.company || "",
      service_interest: body.service_interest || body.service || "",
      message: body.message || body.notes || "",
      source: body.source || "Website",
      page_url: body.page_url || "",
      status: "New",
      human_review_required: true,
    };

    if (!leadPayload.full_name && !leadPayload.email && !leadPayload.phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required lead contact information",
        }),
      };
    }

    const n8nWebhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "N8N_LEAD_WEBHOOK_URL is not configured",
        }),
      };
    }

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadPayload),
    });

    if (!n8nResponse.ok) {
      throw new Error(`n8n webhook failed: ${n8nResponse.status}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        lead_id: leadPayload.id,
      }),
    };
  } catch (error) {
    console.error("Lead capture error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Lead capture failed",
      }),
    };
  }
}