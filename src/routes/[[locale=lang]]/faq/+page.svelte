<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    
</script>

<h1 class="container-custom text-center">Häufige Fragen</h1>

<Accordion.Root type="single" class="container-custom" value="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Anfahrt</Accordion.Trigger>
    <Accordion.Content class="flex flex-col gap-4 text-balance">
      <p>
        Die Sportschule Oberhaching ist einfach mit der S-Bahn erreichbar
      </p>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Shipping Details</Accordion.Trigger>
    <Accordion.Content class="flex flex-col gap-4 text-balance">
      <p>
        We offer worldwide shipping through trusted courier partners. Standard
        delivery takes 3-5 business days, while express shipping ensures
        delivery within 1-2 business days.
      </p>
      <p>
        All orders are carefully packaged and fully insured. Track your shipment
        in real-time through our dedicated tracking portal.
      </p>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Trigger>Return Policy</Accordion.Trigger>
    <Accordion.Content class="flex flex-col gap-4 text-balance">
      <p>
        We stand behind our products with a comprehensive 30-day return policy.
        If you&apos;re not completely satisfied, simply return the item in its
        original condition.
      </p>
      <p>
        Our hassle-free return process includes free return shipping and full
        refunds processed within 48 hours of receiving the returned item.
      </p>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>