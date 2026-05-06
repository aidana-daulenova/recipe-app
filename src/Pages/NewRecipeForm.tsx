import {
  Flex,
  Fieldset,
  Stack,
  Text,
  Button,
  Field,
  Input,
  Portal,
  Select,
  createListCollection,
  Textarea,
  FileUpload,
  Float,
  useFileUploadContext,
} from "@chakra-ui/react";
import { LuFileImage, LuX } from "react-icons/lu";

export default function AddNewRecipe() {
  const frameworks = createListCollection({
    items: [
      { label: "Breakfast", value: "breakfast" },
      { label: "Lunch", value: "lunch" },
      { label: "Dinner", value: "dinner" },
      { label: "Dessert", value: "dessert" },
      { label: "Baking", value: "baking" },
    ],
  });

  const FileUploadList = () => {
    const fileUpload = useFileUploadContext();
    const files = fileUpload.acceptedFiles;
    if (files.length === 0) return null;
    return (
      <FileUpload.ItemGroup>
        {files.map((file) => (
          <FileUpload.Item
            w="auto"
            boxSize="20"
            p="2"
            file={file}
            key={file.name}
          >
            <FileUpload.ItemPreviewImage />
            <Float placement="top-end">
              <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
                <LuX />
              </FileUpload.ItemDeleteTrigger>
            </Float>
          </FileUpload.Item>
        ))}
      </FileUpload.ItemGroup>
    );
  };

  return (
    <Flex minH="10vh" pt={3}>
      <Fieldset.Root size="lg" maxW="lg">
        <Stack>
          <Fieldset.Legend>
            <Text textStyle="2xl">Adding new recipe</Text>
          </Fieldset.Legend>
        </Stack>

        <Field.Root required>
          <Field.Label>
            Recipe name
            <Field.RequiredIndicator />
          </Field.Label>
          <Input />
        </Field.Root>

        <Select.Root multiple collection={frameworks} size="sm" maxW="lg">
          <Select.HiddenSelect />
          <Select.Label>Select meal type</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Meal type" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {frameworks.items.map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <Field.Root>
          <Field.Label>Ingridients (temporary solutions)</Field.Label>
          <Input />
        </Field.Root>

        <Field.Root>
          <Field.Label>Method</Field.Label>
          <Textarea autoresize />
        </Field.Root>

        <FileUpload.Root accept="image/*" maxFiles={1}>
          <FileUpload.HiddenInput />
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm">
              <LuFileImage /> Upload Images
            </Button>
          </FileUpload.Trigger>
          <FileUploadList />
        </FileUpload.Root>

        <Field.Root>
          <Button alignSelf="flex-start" mt={3} type="submit">
            Save
          </Button>
        </Field.Root>
      </Fieldset.Root>
    </Flex>
  );
}
